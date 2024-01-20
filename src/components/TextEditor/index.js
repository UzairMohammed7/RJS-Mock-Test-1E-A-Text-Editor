import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  MainContainer,
  ImageContainer,
  TextEditorHeading,
  TextEditorImage,
  TextEditContainer,
  EditButtonsContainer,
  ButtonListStyle,
  Button,
  TextArea,
} from './StyledComp'

class TextEditor extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
  }

  onClickBold = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  onClickItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({isUnderline: !prev.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state

    const boldFont = isBold ? 'bold' : 'normal'
    const boldButtonColor = isBold ? '#faff00' : '#f1f5f9'
    const italicFont = isItalic ? 'italic' : 'normal'
    const italicButtonColor = isItalic ? '#faff00' : '#f1f5f9'
    const underlineFont = isUnderline ? 'underline' : 'normal'
    const underlineButtonColor = isUnderline ? '#faff00' : '#f1f5f9'

    return (
      <MainContainer>
        <ImageContainer>
          <TextEditorHeading>Text Editor</TextEditorHeading>
          <TextEditorImage
            src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
            alt="text editor"
          />
        </ImageContainer>
        <TextEditContainer>
          <EditButtonsContainer>
            <ButtonListStyle>
              <Button
                data-testid="bold"
                onClick={this.onClickBold}
                color={boldButtonColor}
              >
                <VscBold size={23} />
              </Button>
            </ButtonListStyle>
            <ButtonListStyle>
              <Button
                data-testid="italic"
                onClick={this.onClickItalic}
                color={italicButtonColor}
              >
                <GoItalic size={23} />
              </Button>
            </ButtonListStyle>
            <ButtonListStyle>
              <Button
                data-testid="underline"
                onClick={this.onClickUnderline}
                color={underlineButtonColor}
              >
                <AiOutlineUnderline size={23} />
              </Button>
            </ButtonListStyle>
          </EditButtonsContainer>
          <TextArea
            rows="10"
            cols="50"
            boldStyle={boldFont}
            italicStyle={italicFont}
            underlineStyle={underlineFont}
          />
        </TextEditContainer>
      </MainContainer>
    )
  }
}

export default TextEditor

// ccbp submit RJSCE98XPC
