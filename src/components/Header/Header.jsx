import profile from '../../assets/images/profile.png';

const Header = () => {
  return (
    <div className='flex items-center justify-between pb-8 pt-12 border-b-2 border-solid border-[#11111126]'>
      <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-[#111111]">Knowledge Cafe</h3>
      <img className='w-14' src={profile} alt="" />
      
    </div>
  );
};

export default Header;