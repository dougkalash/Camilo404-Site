import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  strTime: string = '';

  constructor() { }

  ngOnInit() {
    // Comentado para desativar a atualização automática do relógio
    // this.updateTime();
    // setInterval(() => this.updateTime(), 1000);
  }

  // Função comentada para preservar a lógica de atualização do tempo, mas desativada por enquanto
  /*
  updateTime() {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // A hora '0' deve ser '12'
    const formattedHours = hours < 10 ? '0' + hours : hours;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    this.strTime = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds + ' ' + ampm;
  }
  */
}