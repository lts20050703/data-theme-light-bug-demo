import "./style.css";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <!-- buttons -->
    <div class="p-4">
      <div>No data-theme</div>
      <button class="btn btn-primary">primary</button>
      <button class="btn btn-secondary">secondary</button>
      <button class="btn btn-accent">accent</button>
    </div>
    
    <div class="p-4" data-theme="">
      <div>data-theme=""</div>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
    </div>
    
    <div class="p-4" data-theme="light">
      <div>data-theme="light"</div>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
    </div>

    <div class="p-4" data-theme="dark">
      <div>data-theme="dark"</div>
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button>
    </div>
`;
