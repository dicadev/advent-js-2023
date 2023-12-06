In 🎅 Santa's workshop, <span style="color:#f0ad4e">**some Christmas messages have been written in a peculiar way**</span>: the words within the brackets must be read backwards.

<span style="color:#f0ad4e">**Santa needs these messages to be correctly formatted.**</span> Your task is to write a function that takes a string and reverses the characters within each pair of parentheses, removing the parentheses as well.

However, bear in mind that there may be nested parentheses, so you should reverse the characters in the correct order.


```js
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
```

Notes:

<span style="color:#f0ad4e">

- The input strings will always be well formed with parentheses that match correctly, you do not need to validate them.
- There should not be any parentheses left in the final message.
- The maximum nesting level is 2.

</span>