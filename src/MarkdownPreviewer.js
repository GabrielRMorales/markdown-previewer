import {React, Component} from "react";
import marked from "marked";

marked.setOptions({
    gfm: true,
    breaks: true
})
const defaultText = '# Welcome to my React Markdown Previewer! \
\n \
## This is a sub-heading... \
\n \
### And here\'s some other cool stuff:\
\n \
\n Here\'s some code, `<div></div>` between 2 backticks! \
\n```\
\n// this is multi-line code:\
\n \
\n function anotherExample(firstLine, lastLine) {\
\n     if (firstLine) {\
\n     return `hello World!`;\
\n   }\
\n }\
\n```\
\n \
\n You can also make text **bold**... whoa!<br>Or _italic_.<br>\
\n Or... wait for it... **_both!_** \
\n And feel free to go crazy ~~crossing stuff out~~.\
\n \
\n There\'s also [links](https://www.freecodecamp.com), and\
\n > Block Quotes!\
\n \
\n And if you want to get really crazy, even tables:\
\
\n Wild Header | Crazy Header | Another Header?\
\n ------------ | ------------- | -------------\
\n Your content can | be here, and it | can be here....\
\n And here. | Okay. | I think we get it.\
\n\
\n - And of course there are lists.\
\n   - Some are bulleted.\
\n      - With different indentation levels.\
\n         - That look like this.\
\n\
\n 1. And there are numbererd lists too.\
\n 1. Use just 1s if you want!\
\n 1. And last but not least, let\'s not forget embedded images:\
\n\
\n ![React Logo w/ Text](https://goo.gl/Umyytc)';

class MarkdownPreviewer extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: defaultText,
            editorView: false,
            previewView: false
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        })
    }

    render(){
        const editorBtn=<button className='open-close' onClick={(e)=>{
            this.setState(prevState=>{
                return {
                    editorView: !prevState.editorView,
                    previewView: false
                }
            }, window.scrollTo(0,0));
        }} >{this.state.editorView ? "Shrink" : "Expand"}</button>


        const previewBtn=<button className='open-close' onClick={(e)=>{
            this.setState(prevState=>{
                return {previewView: !prevState.previewView,
                        editorView: false}
            }, window.scrollTo(0,0));
        }}>{this.state.previewView? "Shrink": "Expand"}</button>;

        const markedText = marked(this.state.text);
        return <div id="markdown-preview">
            <section id="editor-container" className={this.state.editorView ? "full-view" : ""}>
            {editorBtn}
            <textarea id="editor"
            onChange={this.handleChange} value={this.state.text}
            rows="12" cols="30" />
            </section>
            

            <main className={this.state.previewView ? "full-view" : ""}>
             {previewBtn}
            <section id="preview" dangerouslySetInnerHTML={{__html: markedText}}></section>
            </main>
        </div>
    }
}

export default MarkdownPreviewer;