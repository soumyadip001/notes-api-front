import React from "react"

const img = (props) => {

    const {
        src = "#",
        height = "15px",
        alt = "Image",
        title,
        ...attributes
    } = props

    const validURL = (str) => {
        var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
          '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
        return !!pattern.test(str);
    }

    const imgTitle = (typeof title === "undefined") ? alt : title
    const imgSrc = (validURL(src)) ? src : process.env.PUBLIC_URL + src

    return (
        <img 
            src={imgSrc} 
            height={height} 
            alt={alt} 
            title={imgTitle}
            {...attributes} />
    )
}

export default img