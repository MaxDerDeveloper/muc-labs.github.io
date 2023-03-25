#!/usr/bin/python3
from pathlib import PurePath
from pprint import pprint
import shutil
import jinja2
import debug
import os
import re

BASE      = PurePath(__file__).parent
TEMPLATES = BASE / "src"

environment = jinja2.Environment(loader=jinja2.FileSystemLoader(TEMPLATES))
ALLOWED_EXTENSIONS = ["html", "css", "js", "txt"]

def render(filepath, context:dict):
	with open(filepath, "r") as f:
		content = f.read()

	template = environment.from_string(content)
	return template.render(**context)

def _getFilepaths(parent:PurePath, depth=3):
	def recursive_render(parent, depth=1):
		if depth < 0: return

		for filename in os.listdir(parent):
			filepath = PurePath(parent) / filename
			if os.path.isdir(filepath):
				recursive_render(filepath, depth=depth-1)
			else:
				paths.append(filepath)

	dir = BASE / parent
	assert os.path.exists(dir), "The specified root directory does not exist"

	paths = []
	recursive_render(dir, depth=depth)
	return paths

def _getNewPath(src, old_path, dst_dir):
	parts = list(old_path.parts)
	idx   = parts.index(src) + 1
	parts = list(PurePath(dst_dir).parts) + parts[idx:]
	return PurePath(*parts)

def compile(src, dst="out", compress=True):
	context = {
		"page_title": "muclabs",
		"metas": '<meta charset=utf-8>\n\t\t<meta name="viewport", content="width=device-width, initial-scale=1.0">',
	}

	src_dir   = BASE / src
	paths     = _getFilepaths(src_dir)
	dst_dir   = BASE / dst
	gen       = debug.progressbar(paths, "Rendering", N=len(paths), unit="Files", every=1)
	
	for filepath in gen:
		_, ext = os.path.splitext(filepath)
		ext = ext[1:]

		newpath = _getNewPath(src, filepath, dst_dir)

		# Create necessary directories
		if not os.path.exists(newpath.parent):
			os.makedirs(newpath.parent, exist_ok=True)

		if ext in ALLOWED_EXTENSIONS:
			content = render(filepath, context)

			if compress:
				# Remove html comments
				content = re.sub(r"<!--(.|\s|\n)*?-->", "", content)

				# Remove empty lines
				content = re.sub(r"(\r?\n|^)(\s)*?\r?\n", "\r\n", content)

				# Remove line break between tags
				content = re.sub(r">(\s*\r?\n\s*)*?<", "><", content)

				# Remove indentation
				# content = re.sub(r"(\r?\n)\s+<", "$1<", content)

			with open(newpath, "w") as f:
				f.write(content)
		else:
			shutil.copy(filepath, newpath)

def main():
	compile("src")

if __name__ == "__main__":
	main()