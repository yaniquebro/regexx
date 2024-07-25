# Matching Hex Values

Regex (Regular expressions), is a tool that can be used to help sync what you're searching via text. Below you will fin a breakdown where hexidecimal (HEX), values can be matched to find certain colors you may be searching for, including minimizing errors regarding cap sensitive input.

## Summary

The purpose of HEX values is to pull a precise color located on the color wheel/block.

Below is a breakdown of each section inside the given code:
/^#?([a-f0-9]{6}|[a-f0-9]{3})$/ 

as well as how to include input and what can be added to leverage less errors due to case sensitivity.


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)

## Regex Components

### Anchors
The Anchors in a regex string are the ^ and $. The ^ will represent the start of the string, and the $ represents the end. Everything in between the ^ and $ will represent what the regex is looking for. Anchors do not match any character at all. Instead, they match a position before, after, or between characters.

### Quantifiers
Quantifiers are used to communicate how many characters will be matched. By default, quantifiers match with as many characters as possible. If the ",+,?,{}" characters are found within regular expressions, they are considered quantifiers. The + indicates that the element may be repeated 1 or more times. The ? indicates that the element is optional, matching either 0 or 1 occurrences. The {n} indicates a quantity, in this case {6} and {3}.

### OR Operator
/^#?([a-f0-9]{6}|[a-f0-9]{3})$/ 
The "OR" operator within a regular expression is defined using the | element. The OR operator indicates that it could use either of the components that we are separating with the |. For our hex value regular expression we have ([a-f0-9]{6}|[a-f0-9]{3}). This means that our hex value could either be 6 characters [a-f0-9]{6} or 3 characters [a-f0-9]{3}.

### Character Classes
Character classes are components within our regular expression that tells us what type of characters to expect. In our example, our character classes are confined within brackets []. [a-f0-9]  a-f searches for letters a-f, while 0-9 searches for digits 0-9.

### Flags
Flags modify the behavior of the regex. The case-insensitive flag i makes the regex match letters regardless of case.

with i at the end: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i

if the i is not included, it wont recognize the input due to it having to be the same

### Grouping and Capturing
Parentheses () are used for grouping and capturing.

### Bracket Expressions
Match any character in square brackets. For example [nN] [oO] matches no, nO, No, and NO. gr[ae]y matches both spellings of the word 'grey'; (gray and grey).

### Greedy and Lazy Match
Greedy matching tries to match as much of the input text as possible. Lazy matching tries to match as little of the input text as possible.

In the provided regex, all quantifiers are greedy by default ({6}, {3}).

### Boundaries
Used to match positions in a string. In regex, the ^ and $ anchors mark the start and end boundaries of the string.

## Author

created by Yanique Brooks https://github.com/yaniquebro
