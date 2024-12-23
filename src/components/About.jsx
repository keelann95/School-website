import React from 'react';
import Navbar from './Navbar';

const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold mb-4">{children}</h2>
);

const Paragraph = ({ children }) => (
  <p className="mb-4">{children}</p>
);

const ImagePlaceholder = () => (
  
    <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8fHww" className=' object-cover text-center  w-full h-64 mb-8"' alt="" />
  
);

const About = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Yale School of Art</h1>
        
        <div className="mb-12">
          <SectionTitle>THE YALE SCHOOL OF ART IS A GRADUATE SCHOOL THAT CONFERS MASTER OF FINE ARTS DEGREES IN GRAPHIC DESIGN, PAINTING/PRINTMAKING, PHOTOGRAPHY, AND SCULPTURE</SectionTitle>
          <Paragraph>
            Artists and designers of unusual promise and strong motivation are provided an educational context in which they can explore the 
            potential of their own talents in the midst of an intense critical dialogue. This dialogue is generated by their peers, by distinguished 
            visitors, and by a faculty comprised of professional artists of acknowledged accomplishment.
          </Paragraph>
          <Paragraph>
            The graduate student's primary educational experience at Yale is centered on the student's own studio activity. Supporting this 
            enterprise are the experience, knowledge, and skills gained from rigorous, structured courses such as drawing, filmmaking, the 
            relativity of color, and the rich academic offerings found throughout Yale. Each student is routinely exposed to many aesthetic 
            positions through encounters with faculty members and visitors. The School is devoted not only to the refinement of visual skills, but 
            also to the cultivation of the mind. Students must bring creative force and imagination to their own development, for these qualities 
            cannot be taught—they can only be stimulated and appreciated.
          </Paragraph>
          <Paragraph>
            The School of Art offers an undergraduate art major for students in Yale College (see the bulletin Yale College Programs of Study). In 
            addition, the School's courses are open to students in the Graduate School of Arts and Sciences and other professional schools of the 
            University, and School of Art students may enroll in elective courses in the Graduate School and other professional schools as well as 
            in the College with permission.
          </Paragraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <ImagePlaceholder />
          </div>
          <div>
            <SectionTitle>MASTER OF FINE ARTS DEGREE (MFAS)</SectionTitle>
            <Paragraph>
              The degree of Master of Fine Arts is the only degree offered by the School of Art. It is conferred by the University upon 
              recommendation of the faculty after successful completion of all course work in residence and after a thesis presentation that has 
              been approved by the faculty. It implies distinctive achievement on the part of students in studies in the professional area of their 
              choice and demonstrated capacity for independent work. The minimum residence requirement is two years. All candidates' work is 
              reviewed by faculty at the end of each term. If the work is not considered satisfactory, the student may not be invited back 
              to complete the program (see section on Review and Awards under Academic Regulations in the chapter General Information). 
              All degree candidates are expected to be present at the Commencement exercises in May unless excused by the dean.
            </Paragraph>
            <Paragraph>
              Course work for the Master of Fine Arts degree carries a minimum of sixty credits. The disposition of these credits varies 
              according to the area of study and is agreed upon at the time of registration between the student and the student's faculty adviser.
            </Paragraph>
          </div>
        </div>

        <div className="mb-12">
          <SectionTitle>PUBLIC LECTURES AND EXHIBITIONS</SectionTitle>
          <Paragraph>
            Each department has its own visitors program in which professionals from outside the School are invited to lecture to 
            students or take part in critiques.
          </Paragraph>
          <Paragraph>
            The School also facilitates a public all-school lecture program, in which ideas of general and cross-disciplinary importance are 
            explored by visiting artists and members of the faculty in events typically hosted in the evening that are free and open to the 
            public.
          </Paragraph>
          <Paragraph>
            The School of Art's galleries in Green Hall and EIK at 32 Edgewood Avenue provide a year-round forum for the exhibition of work by 
            students, faculty, and special guests in the four graduate departments of the School and the undergraduate program. 
            Green Gallery is open to the public when exhibitions are scheduled, but open hours vary by semester. EIK is open during 
            limited hours for specific exhibitions and events. Please refer to the Gallery & Publications page for more information.
          </Paragraph>
        </div>

        <div className="mb-12">
          <SectionTitle>Quick Links</SectionTitle>
          <ul className="list-none space-y-2">
            <li><a href="#" className="text-blue-600 hover:underline">Mission Statement</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Land Acknowledgement</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Study Areas</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">People, Resources for Faculty & Students</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Visiting, Facilities</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Support the School</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
            <li><a href="#" className="text-blue-600 hover:underline">History, About this Site</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;