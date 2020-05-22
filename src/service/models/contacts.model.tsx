class Contacts {
  whatsapp?: string;
  skype?: string;
  phone?: string;
  messenger?: string;
  wechat?: string;
  zoom?: string;

  constructor(props: any) {
    this.whatsapp = props.whatsapp;
    this.skype = props.skype;
    this.phone = props.phone;
    this.messenger = props.messenger;
    this.wechat = props.wechat;
    this.zoom = props.zoom;
  }
}

export default Contacts;
