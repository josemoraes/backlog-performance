import Footer from "./Footer";

const components = [
  Footer,
];

export function renderComponents() {
  components.forEach((component) => {
    let $elements = document.querySelectorAll(
      `div[data-component="${component.id}"]`
    );
    $elements.forEach(($element) => {
      let parent = $element.parentNode;
      $element.innerHTML = component._getTemplate(
        $element.getAttribute("data-values")
      );
      parent.replaceChild($element.firstChild, $element);
      if (component._component_events) {
        component._component_events();
      }
    });
  });
}

export function renderComponentById(componentId) {
  const component = components.find((cp) => cp.id === componentId);
  if (component) {
    let $elements = document.querySelectorAll(
      `div[data-component="${component.id}"]`
    );
    $elements.forEach(($element) => {
      $element.innerHTML = component._getTemplate(
        $element.getAttribute("data-values")
      );
      if (component._component_events) {
        component._component_events();
      }
    });
  }
}
