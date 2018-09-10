/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,react/no-did-update-set-state */
import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';
import Label from '../../Label';
import Button from '../../Button';
import Input from '../../Input';
import Skill from '../../Sidebar/Skills/Skill';
import iconDelete from '../../../assets/clear-button.svg';

import './styles.scss';

class EditSkills extends Component {
  state = {
    tags: [],
    popularSkills: [
      'Javascript', 'React', 'Angular', 'Web Design',
    ],
  }

  componentDidMount() {
    const { popularSkills } = this.state;
    const { skills } = this.props;

    const newPopularSkills = popularSkills
      .map(skill => !skills.includes(skill) && skill)
      .filter(skill => skill);

    this.setState({
      tags: skills,
      popularSkills: newPopularSkills,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tags, popularSkills } = this.state;

    if (prevState.tags.length !== tags.length) {
      const newPopularSkills = popularSkills
        .map(skill => !tags.includes(skill) && skill)
        .filter(skill => skill);

      this.setState({
        popularSkills: newPopularSkills,
      });
    }
  }

  handleChange = (tags) => {
    this.setState({ tags });
  }

  addTag = (tag) => {
    this.setState(prev => ({ tags: [...prev.tags, tag] }));
  }

  renderTag = ({
    tag, key, disabled, onRemove, getTagDisplayValue, ...other
  }) => (
    <Skill key={key} {...other}>
      {getTagDisplayValue(tag)}
      {!disabled
      && (
        <img
          alt="delete"
          style={{
            marginLeft: '1rem', height: '.5rem', width: '.5rem', cursor: 'pointer',
          }}
          src={iconDelete}
          onClick={() => onRemove(key)}
          onKeyPress={() => onRemove(key)}
        />
      )
      }
    </Skill>
  )

  renderInput = ({
    onChange, value, addTag, ...other
  }) => (
    <div style={{ marginTop: '2rem' }}>
      <Input onChange={onChange} value={value} {...other} />
    </div>
  )

  render() {
    const { tags, popularSkills } = this.state;

    return (
      <Fragment>
        <header className="header">
          <div className="title">Edit skills</div>
        </header>
        <form className="content">
          <Label value="Your skills" />
          <TagsInput
            value={tags}
            onChange={this.handleChange}
            renderInput={this.renderInput}
            renderTag={this.renderTag}
            inputProps={{ className: 'input' }}
            tagProps={{ className: 'skill' }}
          />

          <Label value="Popular skills" />
          {popularSkills.map(skill => (
            <Skill
              style={{ cursor: 'pointer' }}
              onClick={() => this.addTag(skill)}
            >
              +
              {' '}
              {skill}
            </Skill>
          ))}
        </form>
        <footer className="footer">
          <Button text="Save" />
          <Button cancel text="Cancel" />
        </footer>

      </Fragment>
    );
  }
}

function mapStateToProps({ user }) {
  return { skills: user.profile.skills };
}

export default connect(mapStateToProps, {})(EditSkills);
