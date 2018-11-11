ffmpeg -i test.mov -r 24 -f image2 test/person/%d.jpg
cp test/person/1.jpg test/person/0.jpg

