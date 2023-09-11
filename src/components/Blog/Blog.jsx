import PropTypes from 'prop-types'; 
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog}) => {
  // console.log(blog);

  const {cover, title, posted_date,author_img,author, reading_time, hashtags} = blog;
  return (
    <div className='mb-10'>
      <img className='w-full' src={cover} alt={`Cover picture of title ${title}`} />

      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div>
            <img className='w-14' src={author_img} alt={`Profile picture of author ${author}`} />
          </div>
          <div>
            <h3>{author}</h3>
            <p>{posted_date}</p>

          </div>

        </div>
        <div className='flex'>
          <p>{reading_time} read</p>
          <button className='ml-2'><FaBookmark></FaBookmark></button>


        </div>
      </div>
      <div>
        <h2 className='text-4xl font-bold text-[#111111]'>{title}</h2>
      </div>
      <p>
        {
        hashtags && hashtags.map((hash, index)=> <span key={index}> <a className='text-[#11111199] text-xl font-medium' href=""> #{hash}</a> &nbsp;</span>)
        }
        
      </p>
      <button className='btn underline'>Mark as read</button>
      
      
    </div>
  );
};
Blog.propTypes = {
  blog:PropTypes.object.isRequired,
}
export default Blog;