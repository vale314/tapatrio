import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header-index',
  templateUrl: './header-index.component.html',
  styleUrls: ['./header-index.component.css']
})
export class HeaderIndexComponent implements OnInit {
  muted=false;
  video="https://secure25.syncusercontent.com/mfs-60:eb31aa98d9aa4b02967d95147e71ca77=============================/p/Pop_mix_final_LQ.mp4?allowdd=0&datakey=ZTWpgn/tnTA8GF5s7ySNQvjcseEPEcKnS/OscPdL2Y7R+gxa0pGIrpERnMQPc3GbNj5d5TcJAKQlkxQeL2NvdciO6Iv8TGRnQywK3LmmRItCtrbM4ns3jrZjW0Lh6S0C8tcYXedspJzAVvV9uRwNcU75ixWFuFE5N+RQYGKFkJNJI1c5axDoIeP8zGx11alG9WxeylYUaNTSXkPIly3OeLzOoHTmNveSp0mv7U2oQFTUt6A8nyNYXs6kRKrdCtKHXEVz1jzbgbPqpAYc/hixZ10zsJYPjZORer+HZETvI1/e7/L1SRGRAJXgJAZt6BDZdF9WW8rVDBD2y1UzO8yd5Q&engine=ln-3.1.24&errurl=SAr7ptspRpTlEQi3vnIepB1hAbTK3oji/YOgir80revSaYRYqiRzi6zI8oYShFkwODshln6g5RL85m5erB7X3Qw+ogxQCPfP4UnboCJf7Xs3pAf2h+BZixQ8Zd4kB/Krv8EBdKe2G/3pIspczh8EMyOR41YdB4VYlfc2THxLWZ6IBs+AjXJ9Go5u6TYxvnLtgcLfHODofAtxS2h2bDTO/hXDLB9NArBd3c5BE8waZcKrMZEEe1jYt68/vnBqUI44v0J5XmQbPU9Jhw7nP4u7wVcwCqqBnCHEAXaWLP+XCM1jptAMfqcbyI3aGgnGEUnEVFcrTfPO/m2wkTnYk84r3g==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iUG9wX21peF9maW5hbF9MUS5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnUG9wX21peF9maW5hbF9MUS5tcDQ7&ipaddress=b761c02108e0e114c5256ed0ada7d3e3a7d27262&linkcachekey=75a9e4b10&linkoid=697300006&mode=100&sharelink_id=8391023080006&timestamp=1562114999717&uagent=acd6daadb0e492422e8791617551c0a8b62d86d4&signature=a481b2d62129d94bd69cf88dc34edf2667c74db4&cachekey=60:eb31aa98d9aa4b02967d95147e71ca77============================="
  poster="https://valentine314-rui.imgbb.com/?list=images&sort=date_desc&page=4&params_hidden%5Buserid%5D=gYmN&params_hidden%5Bfrom%5D=user&seek=TPcWx8T"
  constructor() { }

  bajar(){
    window.scrollTo(999,document.body.scrollHeight);
  }

  ngOnInit() {
  }

  // ngAfterViewInit(){
  //   this.muted=!this.muted;
  // }


  clickMuted(){
    this.muted=!this.muted;
  }

}
