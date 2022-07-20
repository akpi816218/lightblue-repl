import glob
print('Collecting files...')
html = glob.glob('./' + '/**/*.html', recursive=True)
css = glob.glob('./' + '/**/*.css', recursive=True)
js = glob.glob('./' + '/**/*.js', recursive=True)
svg = glob.glob('./' + '/**/*.svg', recursive=True)
ico = glob.glob('./' + '/**/*.ico', recursive=True)
wav = glob.glob('./' + '/**/*.wav', recursive=True)
mp3 = glob.glob('./' + '/**/*.mp3', recursive=True)
# ogg = glob.glob('./' + '/**/*.ogg', recursive=True)
print('Writing...')
split = "',\n\t'"
text = "[\n\t'"+split.join(html)+split+split.join(css)+split+split.join(js)+split+split.join(svg)+split+split.join(ico)+split+split.join(wav)+split+split.join(mp3)+"'\n]"
list = open('list.txt', 'w')
list.write(text)
list.close()
print('Done.')
print(text)
