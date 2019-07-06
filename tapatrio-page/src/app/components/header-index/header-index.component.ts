import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-header-index',
  templateUrl: './header-index.component.html',
  styleUrls: ['./header-index.component.css']
})
export class HeaderIndexComponent implements OnInit {
  muted=true;
  video="https://secure25.syncusercontent.com/mfs-60:eb31aa98d9aa4b02967d95147e71ca77=============================/p/Pop_mix_final_LQ.mp4?allowdd=0&datakey=kdn39VPeA1ItwxiDsG5ysJnORXrhqDn4AN6hZ0z63zHjapNOy+jq/3DbJuKMSrDLpkRVNgQab/pjLwtbnxjjeTVUe72hzFMKYoOyffXfiON8gRuyOXivqW1g6rjmrc/Q93k1IlhHsbBED+B/kMO1cqpGjuO92MDue3Q/2m8sEzxtuIHOVpr094pd99nwu2IU7XEYtfm+O9iThKKGMRMq7WQK0sxKhN6bKSWgD4gqrfaeSHuNvKRd1I+L9UTCZHtcVt2oygVyEqLueD5QOqD0NTWV25p7h7RcVxIiZtmlgIJuhDhAnMtDtydlPdlbZKYBQi6KXjWEYrAxd2oRU3GyQw&engine=ln-3.1.26&errurl=FmPvykSnnIvVUw7aQJGpf8dF1OX3mv0Vmw/JIUS6jmNXDn7KYEqu4DtObaDt6v9SCu4QK4XThp2kY75DS+dqogJeEy0/ltLl51ThgB3Snuc1IGq65OI8d8/grWiEv8c5mJCEp2rQKKjBT5PAxQgzxxUsK5Am7hxcAG7xPIjn5jDdMpX9jWd13OSXCfXJdmUCRyDsxm1nV8eX5laCJdp14pzr2JH30W5ZZ+8oWsAEi09CkYDEaRqVW005tlQ1HqcZ1d4xTp4aeT/vwtF9ymikNSsgIsDJ9Ai3BEv1+N2PeSsL2T+4yD74jYr1HyfoIyjNBHiPrpqfecY6W6bp5mBLyQ==&header1=Q29udGVudC1UeXBlOiB2aWRlby9tcDQ&header2=Q29udGVudC1EaXNwb3NpdGlvbjogaW5saW5lOyBmaWxlbmFtZT0iUG9wX21peF9maW5hbF9MUS5tcDQiO2ZpbGVuYW1lKj1VVEYtOCcnUG9wX21peF9maW5hbF9MUS5tcDQ7&ipaddress=b761c02108e0e114c5256ed0ada7d3e3a7d27262&linkcachekey=75a9e4b10&linkoid=697300006&mode=100&sharelink_id=8391023080006&timestamp=1562376911752&uagent=acd6daadb0e492422e8791617551c0a8b62d86d4&signature=31e580cfa52718602dce6398dd39ad4296150a2a&cachekey=60:eb31aa98d9aa4b02967d95147e71ca77============================="
  poster="https://valentine314-rui.imgbb.com/?list=images&sort=date_desc&page=4&params_hidden%5Buserid%5D=gYmN&params_hidden%5Bfrom%5D=user&seek=TPcWx8T"
  constructor() { }

  bajar(){
    window.scrollTo(999,document.body.scrollHeight);
  }

  ngOnInit() {
  }

  // ngAfterContentInit(){
  //   this.muted=!this.muted;
  // }


  clickMuted(){
    this.muted=!this.muted;
  }

}
