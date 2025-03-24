# Minimal example for Stylelint issue

This appears to be an issue with [`declaration-property-value-no-unknown`](https://stylelint.io/user-guide/rules/declaration-property-value-no-unknown/) and [relative color syntax](https://www.w3.org/TR/css-color-5/#relative-colors):

```css
/* FAIL */
body {
  background-color: hsl(from #f00 h s calc(l - 25));
}

/* PASS */
body {
  background-color: hsl(from var(--null, #f00) h s calc(l - 25));
}
```
