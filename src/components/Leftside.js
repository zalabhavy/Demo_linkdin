import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setUserData, toggleBioEdit, toggleExperienceEdit, updateBio, addExperience, updateExperience } from "../Redux/action"; 

const Leftside = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        dispatch(setUserData({
          name: `${user.name.first} ${user.name.last}`,
          bio: "A passionate developer who loves creating impactful applications.",
          experiences: [{ title: "SDE", company: "Google", duration: "2 years" }],
          picture: user.picture.medium,
        }));
      });
  }, [dispatch]);

  const handleBioChange = (e) => dispatch(updateBio(e.target.value));
  const handleToggleBioEdit = () => dispatch(toggleBioEdit());

  const handleExperienceChange = (index, field, value) => {
    dispatch(updateExperience(index, field, value));
  };

  const handleAddExperience = () => dispatch(addExperience());

  const handleToggleExperienceEdit = () => dispatch(toggleExperienceEdit());

  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo imageUrl={userData.picture} />
            <Link>{userData.name}</Link>
          </a>
          <a>
            {userData.isEditingBio ? (
              <BioInput
                type="text"
                value={userData.bio}
                onChange={handleBioChange}
              />
            ) : (
              <BioText>{userData.bio}</BioText>
            )}
            <EditButton onClick={handleToggleBioEdit}>
              {userData.isEditingBio ? "Save" : "Edit Bio"}
            </EditButton>
          </a>
        </UserInfo>
      </ArtCard>

      <ArtCard>
        <SectionHeader>Experience</SectionHeader>
        {userData.experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            {userData.isEditingExperience ? (
              <>
                <input
                  type="text"
                  value={exp.title}
                  placeholder="Title"
                  onChange={(e) =>
                    handleExperienceChange(index, "title", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={exp.company}
                  placeholder="Company"
                  onChange={(e) =>
                    handleExperienceChange(index, "company", e.target.value)
                  }
                />
                <input
                  type="text"
                  value={exp.duration}
                  placeholder="Duration"
                  onChange={(e) =>
                    handleExperienceChange(index, "duration", e.target.value)
                  }
                />
              </>
            ) : (
              <p>
                {exp.title} {exp.company} {exp.duration}
              </p>
            )}
          </ExperienceItem>
        ))}
        {userData.isEditingExperience && (
          <AddButton onClick={handleAddExperience}>+ Add Experience</AddButton>
        )}
        <EditButton onClick={handleToggleExperienceEdit}>
          {userData.isEditingExperience ? "Save" : "Edit Experience"}
        </EditButton>
      </ArtCard>

      <ArtCard>
        <SectionHeader>Education</SectionHeader>
        <p>{userData.education[0]}</p>
      </ArtCard>

      <ArtCard>
        <SectionHeader>Skills</SectionHeader>
        <SkillsList>
          {userData.skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </ArtCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: leftside;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  cursor: pointer;
  position: relative;
  border: none;
  padding: 10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  margin-bottom: 10px;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
  margin-bottom: 10px;
`;

const Photo = styled.div`
  background-image: url(${(props) => props.imageUrl});
  width: 72px;
  height: 72px;
  background-size: cover;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

const BioText = styled.div`
  font-size: 14px;
  margin-top: 4px;
`;

const BioInput = styled.input`
  width: 90%;
  padding: 8px;
  margin-top: 4px;
  font-size: 14px;
`;

const EditButton = styled.button`
  margin-top: 8px;
  padding: 6px 12px;
  background-color: #0a66c2;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const SectionHeader = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const ExperienceItem = styled.div`
  margin: 8px 0;
`;

const AddButton = styled.button`
  background-color: #e6e6e6;
  padding: 6px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

const SkillItem = styled.span`
  background-color: #e6e6e6;
  margin-top: 10px;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export default Leftside;
