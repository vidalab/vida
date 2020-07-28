Vida React Component
===

Render dashboards with JSON inputs.

### Include TailwindCSS

vidajs uses tailwindcss. You need to include its CSS on your DOM.

```css
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
```

If you use use vidajs in your nodejs project, you should use build pipeline. See installation link below for more information.

https://tailwindcss.com/docs/installation

### React Example

```javascript
import vizJson from './viz.json'

<div style={{width: "1000px", height: "500px"}}>
  <Vida vizData={vizJson} />
</div>
```
