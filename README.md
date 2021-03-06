edgestore
===========

Store edge relationships for two-way retrieval. Ideal for dependency tracking.

Example
---
```javascript
var edges = edgestore();

edges.add('A', 'B');
edges.add('A', 'C');
edges.add('B', 'C');

console.log(edges.get_for_x('A'));
// ['B', 'C']
console.log(edges.get_for_x('B'));
// ['C']

console.log(edges.get_for_y('B'));
// ['A']
console.log(edges.get_for_y('C'));
// ['A', 'B']
```

API
---

### add(x, y)

Add a new edge.

### remove(x, y)

Remove an existing edge.

### exists(x, y)

Find whether a pair exists.

### clear()

Clear all edges.

### remove_for_x(x)

Remove all edges (x, \*)

### remove_for_y(y)

Remove all edges (\*, y)

### get_for_x(x)

Gets an Array of all y such that exists(x, y) is true

### get_for_y(y)

Gets an Array of all x such that exists(x, y) is true

LICENSE
-------

The MIT License (MIT)

Copyright (c) 2016 Shida Li

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
