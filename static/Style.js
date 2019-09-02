import css from 'styled-jsx/css';


export default <style>{`
    body {
        font-family: Verdana, sans-serif;
        margin: 0;
        padding: 0;
        color: #669;
    }

    h1 {
        font-size: 22pt;
        font-weight: bold;
        text-align: left;
        letter-spacing: 0;
        color: #77a;
        margin: -50px 0 50px 0;
    }

    p {
        margin: 0;
        color: #669;
        font-size: 16pt
    }

    hr {
        margin: 25px 0;
    }

    tr {
        margin: 0;
    }

    th {
        font-size: 14pt,
        font-weight: plain;
        text-align: left;
        padding: 0 20px;
        margin: 0;
        border-bottom: 1px solid gray;
    }

    td {
        font-size: 14pt;
        font-weight: plain;
        text-align: right;
        padding: 0 20px;
        margin: 0;
        border-bottom: 1px solid gray;
    }

    header h1 {
        font-size: 68pt;
        font-weight: bold;
        text-align: right;
        letter-spacing: -8px;
        color: #f0f0f0;
        margin: -32px 5px;
        float: right;
    }

    header {
        background: darkblue;
        width: 100%;
        height: 80pt;
        margin: 0 0 50px;
        color: #f0f0f0;
    }

    header p{
        font-size: 22pt;
        font-weight: bold;
        padding-left: 50px;
        padding-top: 30px;
        color: white;
        float: left;
    }

    footer {
        color: #99c;
        font-size: 12pt;
        text-align: center;
        border-top: 2px solid #99c;
        margin: 0;
        position: relative;
        bottom: 0;
        left: 0;
    }
`}</style>
