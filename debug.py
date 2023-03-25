from colorama import Fore, Style, init
from math import floor, ceil
import time
import sys

__version__ = "1.4"
# 1.4: Rewrote ProgressBar to progressbar
# 1.3: ProgressBar now respects the showAfter parameter
# 1.2: _base added keyword func, _base is no lambda anymore
# 1.1: _base updated to convert color to string
# 1.0: _base updated to apply kwargs to entire output

init()

# _base    = lambda col, *args, **kwargs, func=print: [func(str(col)+str(args[0]), *args[1:], **kwargs),func(end=Style.RESET_ALL)]
def _base(col, *args, func=print, **kwargs):
	func(str(col)+str(args[0]), *args[1:], **kwargs)
	func(end=Style.RESET_ALL)

info     = lambda *args, **kwargs: _base(Fore.LIGHTBLACK_EX, "[*]", *args, **kwargs)
progress = lambda *args, **kwargs: _base(Fore.GREEN,         "[+]", *args, **kwargs)
error    = lambda *args, **kwargs: _base(Fore.RED,           "[-]", *args, **kwargs)
warning  = lambda *args, **kwargs: _base(Fore.YELLOW,        "[!]", *args, **kwargs)

raw_info = lambda *args, **kwargs: _base(Fore.LIGHTBLACK_EX, *args, **kwargs)

def formatSeconds(seconds):
	minutes, seconds = divmod(seconds, 60)
	hours, minutes   = divmod(minutes, 60)
	return "{:02d}:{:02d}:{:02d}".format(hours, minutes, seconds)

def formatPercentage(p):
	strNumber = str(round(100*p, 2))
	
	digits, decimals = strNumber.split(".")

	digits   = digits.  rjust(3, " ")
	decimals = decimals.ljust(2, '0')

	return f"{digits}.{decimals} %"

#############################
###### NEW PROGRESSBAR ######
#############################

from animation import getPos, setPos, setCursorVisibility
import humanize

def progressbar(gen, title, N, unit, every=1e5, took=False):
	getTime    = lambda: time.time_ns() # lambda: time.time()
	pos_begin  = getPos()
	pos_end    = (pos_begin[0], pos_begin[1]+1)
	last_len   = 0 
	total_time = 0
	speed      = 0.0
	t1, t0     = getTime(), getTime()
	last_i     = 0
	prog_len   = 20
	for i, val in enumerate(gen):
		if i%every == 0 or i==N-1:
			setCursorVisibility(False)
			perc      = (i+1)/N
			numchars  = int(round(prog_len * perc))
			# prog      = "#"*(numchars) + chr(32)*(prog_len-numchars)
			
			if numchars == prog_len:
				prog = "="*prog_len
			elif i == 0:
				prog = chr(32)*prog_len
			else:
				prog = "="*(numchars-1) + ">" + chr(32)*(prog_len-numchars)
		 	

			time_left = ((t1-t0)/1e9)/perc - ((t1-t0)/1e9) if perc!=0 else 0
			m,s = divmod(time_left, 60)
			h,m = divmod(m, 60)
			# timeDelta = humanize.precisedelta(time_left, minimum_unit='seconds', suppress=['days'], format='%0.2f')
			timeDelta = f"{h:>02.0f}:{m:>02.0f}:{s:>02.0f}"
			msg       = f"{title}: [{prog}] {humanize.number.metric(speed, unit)}/s | {timeDelta}"
			clear = chr(32)*last_len + "\r"*last_len 

			if i != 0:
				pos_end = getPos()
			setPos(*pos_begin)
			sys.stdout.write(clear + msg)
			sys.stdout.flush()
			setPos(*pos_end)
			setCursorVisibility(True)

		last_len = len(msg)

		yield val
		t1     = getTime()
		speed  = i/((t1-t0)/1e9) if (t1-t0)!=0 else 0 # unit of time: seconds
		last_i = i

	
	if took:
		setPos(*(pos_end[0], pos_end[1]+1))
		print(f"Took {(t1-t0)/1e6:.2f} ms")
	else:
		setPos(*(pos_end[0], pos_end[1]))


