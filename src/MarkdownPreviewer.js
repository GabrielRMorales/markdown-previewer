import {React, Component} from "react";
import marked from "marked";

class MarkdownPreviewer extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }

    render(){
        return <div id="markdown-preview">
            <textarea id="editor" onChange={this.handleChange} value={this.state.text}
            rows="5" cols="20" />
            <main id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.text)}} />
        </div>
    }
}

export default MarkdownPreviewer;