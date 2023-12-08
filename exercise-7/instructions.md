Santa is experimenting with new gift designs and <span style="color:#f0ad4e">**he needs your help to visualize them in 3D.**</span>

Your task is to write a function that, given a size n (integer), <span style="color:#f0ad4e">**generates a drawing of a 3D gift**</span> using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

```js
drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

drawGift(1, '^')
/*
#
*/
```

Important: We have been told that <span style="color:#f0ad4e">**there is always to leave a newline at the end of the drawing.**</span>