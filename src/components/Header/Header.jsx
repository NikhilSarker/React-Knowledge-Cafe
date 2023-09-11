import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div>
      <h3 className="text-2xl">Knowledge Cafe</h3>
      <img className='w-10' src={profile} alt="" />
      
    </div>
  );
};

export default Header;