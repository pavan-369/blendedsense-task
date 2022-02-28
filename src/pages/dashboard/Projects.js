import React, { useState } from 'react';
import "./Projects.css";
import {useSelector} from 'react-redux';
import { Col, Divider, Row ,Form ,Input, Button , Dropdown , Menu} from 'antd';
import { SearchOutlined ,CaretDownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { Card } from 'antd';
import defaultProject from '../images/defaultProject.png';
const { Option } = Select;

const Projects = () => {

  const data = useSelector(state => state.user);
  const projects = useSelector(state => state.projects);
  const arachive = useSelector(state => state.arachive);

  // const [active, setActive] = useState(projects);
  const [style1, setStyle1] = useState("flex-container");
  const [style2, setStyle2] = useState("blank");

  const onActiveChange = (value) => {
    switch (value) {
      case 'active':
        setStyle1("flex-container")
        setStyle2('blank')
        return;
      case 'arachive':
        setStyle1("blank")
        setStyle2("flex-container")
        return;
    }
  };

  const [out , setOut] = useState(projects.filter(x=>x.assigned));
  const [out1 , setOut1] = useState(arachive.filter(x=>x.assigned));

  const onProjectChange = (value) => {
    switch (value) {
      case 'my':
            setOut(projects.filter(x=>x.assigned));
            setOut1(arachive.filter(x=>x.assigned));
        return;
      case 'all':
            setOut(projects);
            setOut1(arachive);
        return;
    }
  };
   
  return (
    <div>
        <div className='projects-top'> 
            <Input
            className='projects-search-input'
            placeholder=' Search'
            prefix={<SearchOutlined className='projects-search-icon' />}
             />
                <Select 
                optionFilterProp="children"
                onChange={onProjectChange}
                name="projects"
                className='projects-select' defaultValue="My Projects" style={{ width: 120 }}>
                  <Option value="my">My Projects</Option>
                  <Option value="all">All Projects</Option>
                </Select>

                <Select 
                optionFilterProp="children"
                onChange={onActiveChange}
                name="projects"
                className='projects-select' defaultValue="Active" style={{ width: 120 }}>
                  <Option value="active">Active</Option>
                  <Option value="arachive">Arachive</Option>
                </Select>

        </div>
                <div className={style1}>
                  {out.map(project => 
                  <Card
                  hoverable
                  style={{ width: 345  , height:204 , padding:0}}
                  cover={<img style={ project.business.bannerImage ? {width: 345  , height:140 , objectFit:"contain"} :{width: 345  , height:140 , objectFit:"contain"} }
                   src={project.bannerImage ? project.bannerImage :project.business.bannerImage ? project.business.bannerImage :defaultProject} />}
                >
                  <p style={{ margin:0}}>{project.name}</p>
                </Card>
                  )}</div>


                  <div className={style2}>
                  {out1.map(project => 
                  <Card
                  hoverable
                  style={{ width: 345  , height:204 , padding:0}}
                  cover={<img style={ project.business.bannerImage ? {width: 345  , height:140 , objectFit:"contain"} :{width: 345  , height:140 , objectFit:"contain"} }
                   src={project.bannerImage ? project.bannerImage :project.business.bannerImage ? project.business.bannerImage :defaultProject} />}
                >
                  <p style={{ margin:0}}>{project.name}</p>
                </Card>
                  )}</div>
    </div>
  )
}

export default Projects