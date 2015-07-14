jQuery Flip (╯°□°）╯︵ ┻━┻
=========================

jQuery plugin to flip tables. Literally.

The following HTML table:
```html
<table>
    <tr>
        <td>a</td>
        <td>b</td>
    </tr>
    <tr>
        <td>c</td>
        <td>d</td>
    </tr>
</table>
```

Would turn into:

```html
<table>
    <tr>
        <td>d</td>
        <td>c</td>
    </tr>
    <tr>
        <td>b</td>
        <td>a</td>
    </tr>
</table>
```

## Installation

You can install jQuery Flip through bower:

```shell
bower install jquery-flip
```

Or simply download either of the JavaScript files in `/build`.

## Usage

```js
$('table').flip();
```
