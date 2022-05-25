import { Component } from "react";


class Workspace extends Component {
    
    state = {
        selectedFile: null
    };
    
    onFileChange = event => {
        // this.setState({ selectedFile: event.target.files[0] });
        this.setState({selectedFile: URL.createObjectURL(event.target.files[0])})
    };
    
    onFileUpload = () => {
        // const formData = new FormData();
        // formData.append(
        //     "myFile",
        //     this.state.selectedFile,
        //     this.state.selectedFile.name
        //     );
        console.log(this.state.selectedFile);
    };
    
    fileData = () => {
        if (this.state.selectedFile) {
            return (
                <div>
                    <img src={this.state.selectedFile} alt="description of image"/>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <h1>
                GeeksforGeeks
                </h1>
                <h3>
                File Upload using React!
                </h3>
                <div>
                    <input type="file" onChange={this.onFileChange} />
                    <button onClick={this.onFileUpload}>
                    Upload!
                    </button>
                </div>
            {this.fileData()}
            </div>
        );
    }
}

  
  export default Workspace;