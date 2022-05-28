import { Component } from "react";
import './box.css';


class Workspace extends Component {

    state = {
        selectedFile: null
    };

    onFileChange = event => {
        console.log('it works!')
        // this.setState({ selectedFile: event.target.files[0] });
        this.setState({ selectedFile: URL.createObjectURL(event.target.files[0]) })
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
                    <img src={this.state.selectedFile} alt="description of" />
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4
                        style={{
                            color: 'white'
                        }}>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: 'url("../background/background.png")',
                    //filter: 'blur(3px)',
                    display: 'flex',
                    backgroundSize: 'contain',
                    flexDirection: 'column',
                    //justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                    zIndex: '-1',
                    position: 'fixed'

                }} />


                <h1
                    style={{
                        color: 'white',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        borderRadius: '5%',
                        padding: '2px 4px',
                        fontSize: '70px',
                        position: 'center',
                        margin: '0',
                    }}>
                    Welcome to Celeb-X
                </h1>
                <div class="box rounded">



                    <h2
                        style={{
                            color: 'white',
                            //backgroundColor: 'rgba(0,0,0,0.7)',
                            fontSize: '20px',
                        }}>
                        {'\n'}Scan the face of any celeb and this app will tell you who it is.
                    </h2>


                    <div>
                        <h1
                            style={{
                                padding: '2px 4px',
                                color: 'white',

                                fontSize: '20px',
                            }}>



                            Upload your file here!
                        </h1>
                        <div>
                            <input type="file" id="file" onChange={this.onFileChange} />
                            <label for="file">Choose File</label>
                            <button className="button" onClick={this.onFileUpload}>
                                Upload!
                            </button>
                        </div>
                    </div>
                    {this.fileData()}
                </div>
            </div>

        );
    }
}


export default Workspace;