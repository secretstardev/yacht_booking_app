export const styles = {
  dottedView: {
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  verticalLine: {
    width: '100%',
    height: 1, // Height of the line
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: '#003580', // Color of the dots
    borderStyle: 'dashed',
  },
  hiding1: {
    fontSize: 20,
    color: '#246bbc',
    fontWeight: 'bold',
  },
  hiding3: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#246bbc',
  },
  hiding3: {
    fontSize: 16,
    color: '#246bbc',
    fontWeight: 'bold',
  },
  btnView: {
    paddingLeft: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 180,
    height: 36,
    borderColor: '#003580',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    alignSelf: 'flex-end',
    fontSize: 10,
    color: 'black',
  },
  thumbContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    top: -40, // Adjust this value to position the text above the thumb
    left: 0,
    right: 0,
  },

  thumbText: {
    color: 'black', // Adjust the text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  centerV: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
};
