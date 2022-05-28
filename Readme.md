<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h2 align="center">Scrapple-Lib</h2>

  <p align="center">
     A library for a game that resembles Scrabble, but totally isn't 
    <br />
    <a href="https://github.com/LionelKarlen/Scrapple-Lib/tree/main/docs"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/LionelKarlen/Scrapple-Lib">View Demo</a>
    ·
    <a href="https://github.com/LionelKarlen/Scrapple-Lib/issues">Report Bug</a>
    ·
    <a href="https://github.com/LionelKarlen/Scrapple-Lib/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

### Built With

-   [Typescript](https://www.typescriptlang.org/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [Husky](https://typicode.github.io/husky/#/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/LionelKarlen/Scrapple-Lib.git
    ```
2. Install packages
    ```sh
    yarn
    ```
3. Run linter to ensure everything is set up

    ```sh
    yarn lint
    ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Example usage to run a game of Scrapple.

```js
const s: Scrapple = new Scrapple(2, 'en'); // Initialise new game
// Check fields
console.log(s.board);
console.log(s.bag);
console.log(s.players);
console.log(s.bag.length);

// Define a move
const move: Move = {
	movePieces: [
		{
			index: 0,
			piece: s.players[0].bench[0],
			toCoordinate: {
				x: 7,
				y: 7,
				index: 112,
			},
		},
	],
	player: s.players[0],
};

// Make the move
s.makeMove(move);
```

_For more examples and full explanations, please refer to the [Documentation](https://github.com/LionelKarlen/Scrapple-Lib/tree/main/docs)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/LionelKarlen/Scrapple-Lib/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [LICENSE.txt](./License.txt) for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

-   [Readme Template](https://github.com/othneildrew/Best-README-Template)
-   [Scrabble Rules and guide](https://en.wikipedia.org/wiki/Scrabble)

This project is designed entirely for educational use. I have no association to the Scrabble name, connected brands, nor do I profit from this project. No copyright infringement is intended. If you represent any copyright holders of the affected parties, please contact me so that we can work out how to continue.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/LionelKarlen/Scrapple-Lib.svg?style=for-the-badge
[contributors-url]: https://github.com/LionelKarlen/Scrapple-Lib/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/LionelKarlen/Scrapple-Lib.svg?style=for-the-badge
[forks-url]: https://github.com/LionelKarlen/Scrapple-Lib/network/members
[stars-shield]: https://img.shields.io/github/stars/LionelKarlen/Scrapple-Lib.svg?style=for-the-badge
[stars-url]: https://github.com/LionelKarlen/Scrapple-Lib/stargazers
[issues-shield]: https://img.shields.io/github/issues/LionelKarlen/Scrapple-Lib.svg?style=for-the-badge
[issues-url]: https://github.com/LionelKarlen/Scrapple-Lib/issues
[license-shield]: https://img.shields.io/github/license/LionelKarlen/Scrapple-Lib.svg?style=for-the-badge
[license-url]: https://github.com/LionelKarlen/Scrapple-Lib/blob/master/LICENSE.txt
[product-screenshot]: images/screenshot.png
