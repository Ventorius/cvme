/* eslint-disable */
import React, { Fragment, Component } from 'react'
import TagsInput from 'react-tagsinput'
import Label from '../../Label'
import Input from '../../Input'
import Skill from '../../Sidebar/Skills/Skill'
import iconDelete from '../../../assets/clear-button.svg'

import './styles.scss'

class EditSkills extends Component {
  state = {
    tags: [],
    popularSkills: [
      'Javascript', 'React', 'Angular', 'Web Design'
    ]
  }

  handleChange = (tags) => {
    this.setState({tags})
  }

  addTag = tag => {
    this.setState((prev) => {
      return {tags: [...prev.tags, tag]}
    })
  }

  renderTag = ({
                 tag, key, disabled, onRemove, getTagDisplayValue, ...other
               }) => (
    <Skill key={key} {...other}>
      {getTagDisplayValue(tag)}
      {!disabled
      && (
        <img
          style={{
            marginLeft: '1rem', height: '.5rem', width: '.5rem', cursor: 'pointer',
          }}
          src={iconDelete}
          onClick={e => onRemove(key)}
        />
      )
      }
    </Skill>
  )

  renderInput = ({
                   onChange, value, addTag, ...other
                 }) => (
    <div style={{marginTop: '2rem'}}>
      <Input onChange={onChange} value={value} {...other} />
    </div>
  )

  render () {
    const {tags} = this.state

    return (
      <Fragment>
        <header className="header">
          <div className="title">Edit skills</div>
        </header>
        <div className="content">
          <Label value="Title"/>
          <TagsInput
            value={tags}
            onChange={this.handleChange}
            renderInput={this.renderInput}
            renderTag={this.renderTag}
            inputProps={{className: 'input'}}
            tagProps={{className: 'skill'}}
          />

          <Label value="Popular skills"/>
          {this.state.popularSkills.map(skill => <Skill style={{cursor: 'pointer'}}
                                                        onClick={() => this.addTag(skill)}>+ {skill}</Skill>)}
        </div>

      </Fragment>
    )
  }
}

export default EditSkills
