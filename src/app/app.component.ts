import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statusOptions = ['FEITO', 'ENVIADO P/ENTREGA', 'ENTREGUE'];
  title = 'aplicativo';

  pedidos = [
    { id: 1212, burguer: 'Cheddar Burguer', quantidade: 2, dropdownOpen: false, selectedStatus: '' },
    { id: 1452, burguer: 'Chicken Burguer', quantidade: 3, dropdownOpen: false, selectedStatus: '' }
  ];

  toggleDropdown(id: number): void {
    this.pedidos.forEach(pedido => {
      if (pedido.id === id) {
        pedido.dropdownOpen = !pedido.dropdownOpen;
      } else {
        pedido.dropdownOpen = false;  // Fecha outros dropdowns
      }
    });
  }

  changeStatus(id: number, status: string): void {
    const pedido = this.pedidos.find(p => p.id === id);
    if (pedido) {
      pedido.selectedStatus = status;
      pedido.dropdownOpen = false;  // Fecha o dropdown após seleção
      console.log(`Status do pedido ${id} atualizado para: ${status}`); // Depuração
    }
  }
  

  getStatusColor(status: string): string {
    switch (status) {
      case 'FEITO':
        return '#F25C08'; // Laranja
      case 'ENVIADO P/ENTREGA':
        return '#FBCC28'; // Amarelo
      case 'ENTREGUE':
        return '#3BBB1A'; // Verde
      default:
        return 'black';  // Cor padrão
    }
  }  
}
