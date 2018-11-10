import cv2    # For Splitting video into frames


# Input: A video
# Output: All frames converted to images in the same directory that the 
# video is from.
def video_to_frames(video):
	capture = cv2.VideoCapture(video)
	success, image = capture.read()
	count = 0
	while success:
		cv2.imwrite("%d.jpg" % count, image)
		success, image = capture.read()
		print ("Reading: ", success)
		count += 1
	return


if __name__ == "__main__":
	video_to_frames("TRA3106.mpeg")