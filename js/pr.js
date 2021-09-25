x=["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg","images/img9.jpg","images/img10.jpg","images/img19.jpg"];
slide=document.getElementById("m1");
count=0;
function slideshow()
{
  count=count+1;
    if(count<=x.length)
     {
	 if(count==x.length)
	 {
	 count=0;
	 }
         slide.src=x[count];
	 }
	 console.log(count);
		
	 }	
	 setInterval(slideshow,7000);
	 
	 
	 
 x=["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg","images/img9.jpg","images/img10.jpg","images/img19.jpg"];
slide=document.getElementById("m1");
count=0;
function forward()
{
  count=count+1;
    if(count<=x.length)
     {
	 if(count==x.length)
	 {
	 count=0;
	 }
         slide.src=x[count];
	 }
	 console.log(count);
		
	 }	
	
function backward()
{
  count=count-1;
    if(count<x.length)
     {
	 if(count==-1 || count==-2)
	 {
	 count=2;
	 }
         slide.src=x[count];
	 }
	 console.log(count);
		
	 }	 