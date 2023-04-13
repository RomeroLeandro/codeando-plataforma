import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[cambiarTamanioFuente]'
})
export class CambiarTamanioFuenteDirective {
  @Input('cambiarTamanioFuente') tamanio: string | null = null; // Tamaño de fuente en píxeles o nulo

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cambiarTamanioFuente(this.tamanio);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.cambiarTamanioFuente(null);
  }

  private cambiarTamanioFuente(tamanio: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', tamanio);
  }
}
