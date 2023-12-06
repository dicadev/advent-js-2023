In Santa's workshop, <span style="color:#f0ad4e">**a mischievous elf**</span> has been playing around with the gift production line, adding or removing an unplanned step.

You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

Your task is to <span style="color:#f0ad4e">**write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain.**</span> If there is no difference between the sequences, return an empty string.


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

Please, keep in mind:


<span style="color:#f0ad4e">

- There will always be one different step or none.
- The modification can occur anywhere in the string.
- The original steps could be empty.

</span>