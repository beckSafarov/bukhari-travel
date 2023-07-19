import chunk from 'lodash.chunk'

export const mobileSideSpacing = 'xl:px-0 lg:px-20 md:px-20 sm:px-4 xsm:px-4'
export const smallMobileSideSpacing =
  'xl:px-0 lg:px-0 md:px-20 sm:px-4 xsm:px-4'

export const chunkIntoSpaces = (cardNumber: string, chunkSize: number=4, delimiter: string=" ") => {
  if(cardNumber.length <= chunkSize) return cardNumber
  const chunked = chunk(cardNumber.split(delimiter).join(''), chunkSize)
  return chunked.map((chunk) => chunk.join('')).join(delimiter)
}


// console.log(putSpaceToCardNumber('1234 5678 9'))
