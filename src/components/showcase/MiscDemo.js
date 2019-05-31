import React, { Component } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { Growl } from 'primereact/growl';
import { ProgressBar } from 'primereact/progressbar';

type State = {
  value: number,
};

export default class MiscDemo extends Component<*, State> {
  constructor () {
    super();
    this.state = {
      value: 0,
    };

    this.onUpload = this.onUpload.bind(this);
  }

  onUpload: () => void;
  interval: Function;
  growl: any;

  onUpload () {
    this.growl.show({
      severity: 'info',
      summary: 'Success',
      detail: 'File Uploaded',
    });
  }

  componentDidMount () {
    this.interval = setInterval(() => {
      let val = this.state.value;
      val += Math.floor(Math.random() * 10) + 1;
      if (val >= 100) {
        val = 100;
        clearInterval(this.interval);
      }
      this.setState({ value: val });
    }, 2000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  render () {
    return (
      <div className="p-grid">
        <div className="p-col-12">
          <div className="card">
            <h1>Upload</h1>
            <Growl ref={el => (this.growl = el)} />

            <FileUpload
              name="demo[]"
              url="./upload.php"
              onUpload={this.onUpload}
              multiple={true}
              accept="image/*"
              maxFileSize={1000000}
            />
          </div>
        </div>

        <div className="p-col-12">
          <div className="card">
            <h1>ProgressBar</h1>
            <ProgressBar value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}
