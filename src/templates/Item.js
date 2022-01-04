import { Link } from 'gatsby';
import React from 'react';

const Item = ({ data }) => {
    console.log(data);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1>{data.test.title}</h1>
            <p>content ↓</p>
            <p>{data.test.content}</p>
            <p>Author:{data.test.autor}</p>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default Item;

export const pageQuery = graphql`
query($slug:String!){
    test:contentfulTest(slug:{eq:$slug}){
        slug
        title
        content
        autor
    }
}
`