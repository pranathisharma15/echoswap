export default function Navbar() {
	return (
	  <nav className="bg-[#03045E] text-white p-4 flex justify-between">
		<h1 className="text-2xl font-bold">EchoSwap</h1>
		<div>
		  <a href="#" className="p-2 hover:text-[#0096C7]">Home</a>
		  <a href="#" className="p-2 hover:text-[#0096C7]">Marketplace</a>
		  <a href="#" className="p-2 hover:text-[#0096C7]">Login</a>
		</div>
	  </nav>
	);
  }
  