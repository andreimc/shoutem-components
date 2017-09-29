'use strict'

import { StyleSheet, Dimensions } from 'react-native'

const {height, width} = Dimensions.get('window')

const PADDING = 8
const BORDER_RADIUS = 5
const FONT_SIZE = 16
const HIGHLIGHT_COLOR = 'rgba(255, 255, 255, 0.5)'
const SECTION_TEXT_COLOR = '#CCC'
const OPTION_CONTAINER_HEIGHT = 400
const TEXT_COLOR = 'rgba(255, 255, 255, 0.6)'
const FONT_FAMILY = 'Rubik-Regular'
const BACKGROUND_COLOR = '#171717'
const BORDER_COLOR = 'rgba(50, 50, 50, 0.6)'

export default StyleSheet.create({

  overlayStyle: {
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },

  optionContainer: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    height: OPTION_CONTAINER_HEIGHT,
    backgroundColor: BACKGROUND_COLOR,
    left: width * 0.1,
    top: (height - OPTION_CONTAINER_HEIGHT) / 2
  },

  cancelContainer: {
    left: width * 0.1,
    top: (height - OPTION_CONTAINER_HEIGHT) / 2 + 10
  },

  selectStyle: {
    flex: 1,
    padding: 8
  },

  selectTextStyle: {
    textAlign: 'center',
    color: TEXT_COLOR,
    fontSize: FONT_SIZE
  },

  cancelStyle: {
    borderRadius: BORDER_RADIUS,
    width: width * 0.8,
    backgroundColor: BACKGROUND_COLOR,
    padding: PADDING
  },

  cancelTextStyle: {
    textAlign: 'center',
    fontFamily: FONT_FAMILY,
    color: TEXT_COLOR,
    fontSize: FONT_SIZE
  },

  optionStyle: {
    padding: PADDING,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR
  },

  optionTextStyle: {
    fontFamily: FONT_FAMILY,
    textAlign: 'center',
    fontSize: FONT_SIZE,
    color: HIGHLIGHT_COLOR
  },

  sectionStyle: {
    padding: PADDING * 2,
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR
  },

  sectionTextStyle: {
    fontFamily: FONT_FAMILY,
    color: SECTION_TEXT_COLOR,
    textAlign: 'center',
    fontSize: FONT_SIZE
  }
})
