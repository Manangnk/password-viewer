ffmpeg -i person.mov -r 24 -f image2 test/person/%d.jpg
ffmpeg -i screen.mov -r 24 -f image2 test/screen/%d.jpg
cp test/screen/1.jpg test/screen/0.jpg
cp test/screen/1.jpg test/screen/0.jpg

