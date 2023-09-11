import PropTypes from 'prop-types'; 

const Blog = ({blog}) => {
  // console.log(blog);

  const {cover, title, posted_date,author_img} = blog;
  return (
    <div>
      <h3>Blog Title:{title}</h3>
      <img className='w-52' src={cover} alt="" />
      
      <h3>Blog Title:{posted_date}</h3>
      <img className='w-8' src={author_img} alt="" />
      
    </div>
  );
};
Blog.propTypes = {
  blog:PropTypes.object.isRequired,
}
export default Blog;