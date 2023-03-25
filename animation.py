import sys
import os

if os.name == "nt":
	# After hours of browsing through msdn and pinvoke ...

	from ctypes import windll, Structure, c_short, c_ulong, byref, c_int
	from ctypes.wintypes import POINT
	import ctypes.wintypes

	class COORD(Structure):
		_fields_ = [
			("x", c_short),
			("y", c_short),
		]

	class SMALL_RECT(Structure):
		_fields_ = [
			("Left",   c_short),
			("Top",    c_short),
			("Right",  c_short),
			("Bottom", c_short),
		]

	class CONSOLE_SCREEN_BUFFER_INFO(Structure):
		_fields_ = [
			("dwSize",              COORD),
			("dwCursorPosition",    COORD),
			("wAttributes",         c_short),
			("srWindow",            SMALL_RECT),
			("dwMaximumWindowSize", COORD),
	]

	def _getHandle():
		handle = windll.kernel32.GetStdHandle(-11)

		if not handle:
			we = windll.kernel32.GetLastError()
			raise Exception(f"WinError-{we}")

		return handle

	def setCursorVisibility(visible=False):
		class CONSOLE_CURSOR_INFO(Structure):
			_fields_ = [('dwSize', c_int), ('bVisible', c_int)]

		handle              = _getHandle()
		cursorInfo          = CONSOLE_CURSOR_INFO()
		cursorInfo.dwSize   = 1
		cursorInfo.bVisible = 1 if visible else 0
		windll.kernel32.SetConsoleCursorInfo(handle, byref(cursorInfo))

	def getPos():
		handle = _getHandle()
		cbsi   = CONSOLE_SCREEN_BUFFER_INFO()
		rc     = windll.kernel32.GetConsoleScreenBufferInfo(handle, byref(cbsi))

		if rc:
			pos = cbsi.dwCursorPosition
			return pos.x, pos.y
		else:
			we = windll.kernel32.GetLastError()
			raise Exception(f"WinError-{we}")

	def setPos(x:int, y:int):
		handle = _getHandle()
		pos    = COORD()
		pos.x  = x
		pos.y  = y

		if not windll.kernel32.SetConsoleCursorPosition(handle, pos):
			we = windll.kernel32.GetLastError()
			raise Exception(f"WinError-{we} with {x=} {y=}")

else:
	# Credits to WereCatf: https://stackoverflow.com/a/69582478/11392757
	import termios
	import re

	def getPos():
		OldStdinMode = termios.tcgetattr(sys.stdin)
		_ = termios.tcgetattr(sys.stdin)
		_[3] = _[3] & ~(termios.ECHO | termios.ICANON)
		termios.tcsetattr(sys.stdin, termios.TCSAFLUSH, _)
		
		try:
			_ = ""
			sys.stdout.write("\x1b[6n")
			sys.stdout.flush()
			while not _.endswith('R'):
				_ += sys.stdin.read(1)
			res = re.match(r".*\[(?P<y>\d*);(?P<x>\d*)R", _)
		finally:
			if sys.platform == "win32":
				kernel32.SetConsoleMode(kernel32.GetStdHandle(-10), OldStdinMode)
				kernel32.SetConsoleMode(kernel32.GetStdHandle(-11), OldStdoutMode)
			else:
				termios.tcsetattr(sys.stdin, termios.TCSAFLUSH, OldStdinMode)
		
		if res:
			return int(res.group("x")), int(res.group("y"))
		else:
			return (-1, -1)

	def setPos(x:int, y:int):
		sys.stdout.write(f"\033[{y};{x}H")
		sys.stdout.flush()

	def setCursorVisibility(visible=False):
		c = "l" if visible else "h"
		sys.stdout.write(f"\x1b[?25{c}")
		sys.stdout.flush()

def loadFrame(filepath, col=True):
	result = ""

	with  open(filepath, "rb") as f:
		result = f.read().decode("utf-8")

	if col:
		return "\x1b[32m" + result + "\x1b[0m"
	else:
		return result

def draw(frame, x, y):
	_y = y
	n  = 0
	setPos(x, y)

	for c in frame:
		if c == "\n":
			_x,_y  = getPos()
			setPos(x, _y+1)
			n += 1
		else:
			sys.stdout.write(c)

	return n
