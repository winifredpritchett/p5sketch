var image1; 
var image2;
var vid;

var data = [ 
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [0,0,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [0,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [120,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [20,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [120,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,0,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [250,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [250,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [250,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [250,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [250,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [250,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [250,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,0,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [50,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [400,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [420,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200,0,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [450,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [200, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [500,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [550,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [550,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [550,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [550,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [550,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [550,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [550,840,50,50], 
		"image": "cctv_camera_png.png"
	},

	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [60,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [10,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [600,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [650,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [70,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [70,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [700,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [720,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [720,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [150,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [750,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,40,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [800,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [850,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,0,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [300,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [910,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [900,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [350,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [950,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [100,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1000,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1020,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1050,840,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,0,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,100,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,150,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,200,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,250,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,300,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,350,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,400,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,450,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,500,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,550,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,600,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,650,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,700,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,750,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,800,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,850,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1100,900,50,50], 
		"image": "cctv_camera_png.png"
	},
		{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150, 20,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150, 70,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,90,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,140,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,190,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,240,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,290,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,310,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150, 360,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,410,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,490,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,530,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,580,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,630,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,680,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,710,50,50], 
		"image": "cctv_camera_png.png"
	},

{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,760,50,50], 
		"image": "cctv_camera_png.png"
	},
	{
		"startTime": 18, 
		"endTime": 51, 
		"rect": [1150,840,50,50], 
		"image": "cctv_camera_png.png"
	},



];


function preload() {

	image1 = loadImage ("cctv_camera_png.png");
	

	for(var i = 0; i < data.length; i++) {
		data[i].image = loadImage(data[i].image);
	}


}

function setup (){
  createCanvas(1500,900);

  console.log(data);
}

function draw () {

  // image(image1, mouseX, mouseY);

	if(vid) {
	    image(vid, 0, 0, width, height);

		// Time of the video
		var time = vid.elt.currentTime;

		for(var i = 0; i < data.length; i++) {
			var img = data[i];
			var active = time > img.startTime && time < img.endTime; // true, false
			if(active) {

	var mouseVal= [mouseX, mouseY]

		var wheresX = mouseX > img.rect[0] && mouseX < (img.rect[0]+ img.rect[2]); 
		var wheresY = mouseY > img.rect[1] && mouseY < (img.rect[1]+ img.rect[3]); 

		 var showImage = wheresX && wheresY;
		 console.log(wheresX);
		 if(showImage) {

		 	image(img.image, img.rect[0], img.rect[1], img.rect[2], img.rect[3]);
		 }

       /* var mouseVal = [mouseX, mouseY]
		console.log (mouseval)

		for (var showImg){
		 var mouseval = var active 
		  if (true) {
		  	loadImage ("cctv_camera_png.png") 
		  }
		}

		

				/*
				Instead of drawing the red rectangle
				you want to do another check in as similar manner
				as "active" above, to check if the mouse is with the
				rectangle value

				you can get the mouse with mouseX, and mouseY

				check if its in the box.

				if true, draw image...

				*/
			}
		}


	}


}


function mouseClicked() {
	if(vid) return; // only create the video once
	vid = createVideo(["Google_Video_2.mp4"]);
	vid.loop();
}

// space where (x, y coordinate
// [] arrays keep lists 
// {} objects keep data and values in numbers and lists  -- you can put objects in array 
