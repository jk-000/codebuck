/* eslint-disable @next/next/no-img-element */
export default function TeamSection() {
  const team = [
    {
      name: "Jenil Kakadiya",
      role: "Full Stack Developer",
      image: "/jenil.jpg",
      linkedin: "https://www.linkedin.com/in/jenil-kakadiya/",
    },
    {
      name: "Daksh Goswami",
      role: "Full Stack Developer",
      image: "/daksh.jpg",
      linkedin: "https://www.linkedin.com/in/daksh-goswami-b4384b24b/",
    },
    {
      name: "Piyush Nakarani",
      role: "Frontend Developer",
      image: "/piyush.jpg",
      linkedin: "https://www.linkedin.com/in/nakarani-piyush-192a522b1/",
    },
    {
      name: "Sadhana Savaliya",
      role: "UI/UX & Graphic Designer",
      image: "/sadhana.webp",
      linkedin: "https://www.linkedin.com/in/savaliya-sadhana-70a0ab292/",
    },
    {
      name: "Keyur Nakarani",
      role: "Full Stack Developer",
      image: "/keyur.jpg",
      linkedin: "https://www.linkedin.com/in/keyur-nakarani-594256344/",
    },
    {
      name: "Harsh Balar",
      role: "Android App Developer",
      image: "/harsh.jpg",
      linkedin: "https://www.linkedin.com/in/harsh-balar-89232b31a/",
    },
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-black">
        Our Team
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
        {team.map((member, index) => (
          <a
            key={index}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 rounded-lg p-6 w-full sm:w-[180px] md:w-64 h-[250px] md:h-[300px] shadow-md hover:shadow-lg transition transform hover:scale-105 duration-300 flex flex-col items-center justify-center cursor-pointer"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-black text-center">
              {member.name}
            </h3>
            <p className="text-sm text-gray-800 text-center">{member.role}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
