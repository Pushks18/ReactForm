import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState({
    english: false,
    math: false,
    science: false,
  });
  const [file, setFile] = useState(null);
  const [link, setLink] = useState("");
  const [choice, setChoice] = useState(1);
  const [about, setAbout] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form default submission

    const newData = {
      firstName,
      lastName,
      email,
      contact,
      gender,
      subject,
      link,
      choice,
      about,
    };

    setData([...data, newData]); // Correctly add new data to the array

    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubject({ english: false, math: false, science: false });
    setLink("");
    setChoice(1);
    setAbout("");
  };

  const handleSubjectChange = (sub) => {
    setSubject((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-5">Form in React</h1>
      <form
        onSubmit={handleSubmit}
        className="font-semibold mt-10 mx-auto max-w-md"
      >
        <div className="flex flex-col mb-4">
          <label className="mb-1">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md px-3 py-2 border border-gray-300 shadow-sm"
            type="text"
            placeholder="Enter first Name"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md px-3 py-2 border border-gray-300 shadow-sm"
            type="text"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-1">Enter Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md px-3 py-2 border border-gray-300 shadow-sm"
            type="text"
            placeholder="Enter Email"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label>Contact</label>
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full rounded-md px-3 py-2 border border-gray-300 shadow-sm"
            type="text"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="mb-4">
          <div className="flex flex-row mb-1">Gender</div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="male"
              />
              <div className="flex flex-row ml-2">Male</div>
            </label>
            <label className="flex items-center">
              <input
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="female"
              />
              <div className="flex flex-row ml-2">Female</div>
            </label>
            <label className="flex items-center">
              <input
                checked={gender === "others"}
                onChange={(e) => setGender(e.target.value)}
                type="radio"
                name="gender"
                value="others"
              />
              <div className="flex flex-row ml-2">Others</div>
            </label>
          </div>
        </div>
        <div className=" mb-4">
          <div className="flex flex-row mb-1">Your Best Subject</div>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                checked={subject.english}
                onChange={() => handleSubjectChange("english")}
                type="checkbox"
                name="English"
              />
              <div className="flex flex-row ml-2">English</div>
            </label>
            <label className="flex items-center">
              <input
                checked={subject.math}
                onChange={() => handleSubjectChange("math")}
                type="checkbox"
                name="Mathematics"
              />
              <div className="flex flex-row ml-2">Mathematics</div>
            </label>
            <label className="flex items-center">
              <input
                checked={subject.science}
                onChange={() => handleSubjectChange("science")}
                type="checkbox"
                name="Science"
              />
              <div className="flex flex-row ml-2">Science</div>
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex mb-1">Upload Resume</label>
          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            name="Resume"
            id="resume"
          />
        </div>
        <div className="mb-4">
          <label className="flex mb-1">Enter URL</label>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="text"
            name="Link"
            id="link"
            placeholder="Enter URL"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="flex mb-1">Select your choice</label>
          <select
            value={choice}
            onChange={(e) => setChoice(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            name="Choice"
            id="choice"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="flex flex-col mb-4">
          <label className="flex mb-1">About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full px-3 py-2 rounded-md border border-gray-300 min-h-[100px]"
            name="About"
            id="about"
            placeholder="About yourself"
          />
        </div>
        <div className="flex my-4 items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-800 text-white rounded-md px-4 py-2"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-10 mx-auto max-w-md">
        <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
        {data.map((entry, index) => (
          <div key={index} className="mb-4 p-4 bg-white rounded-md shadow-md">
            <p>
              <strong>First Name:</strong> {entry.firstName}
            </p>
            <p>
              <strong>Last Name:</strong> {entry.lastName}
            </p>
            <p>
              <strong>Email:</strong> {entry.email}
            </p>
            <p>
              <strong>Contact:</strong> {entry.contact}
            </p>
            <p>
              <strong>Gender:</strong> {entry.gender}
            </p>
            <p>
              <strong>Subjects:</strong>{" "}
              {Object.keys(entry.subject)
                .filter((subject) => entry.subject[subject])
                .join(", ")}
            </p>
            <p>
              <strong>Link:</strong> {entry.link}
            </p>
            <p>
              <strong>Choice:</strong> {entry.choice}
            </p>
            <p>
              <strong>About:</strong> {entry.about}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
