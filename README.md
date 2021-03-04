[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![Prettier Style][prettier-style]][prettier-style]
[![Github Build CI][github-build]][github-build]

<!-- ABOUT THE PROJECT -->

## About The Project

Viblo reports tool
Send notifications about chatwork, statistics the number of posts by one organization on viblo

## Built With

- [Typescript]()
- [Docker]()

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Script (Without Container)

First clone project

```bash
make setup
```

Run application

```
make run
```

Before run commit code

```
make test
```

Fixes lint and prettier

```
make fix
```

## Script (In Container CLI)

Check prettier

```bash
yarn pre
```

Fixes Prettier

```bash
yarn pre-fix
```

Check ESlint

```bash
yarn lint
```

Fixes ESlint

```bash
yarn lint-fix
```

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/AvengersCodeLovers/Viblo-Reminder.svg?style=for-the-badge
[contributors-url]: https://github.com/AvengersCodeLovers/Viblo-Reminder/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AvengersCodeLovers/Viblo-Reminder.svg?style=for-the-badge
[forks-url]: https://github.com/AvengersCodeLovers/Viblo-Reminder/network/members
[stars-shield]: https://img.shields.io/github/stars/AvengersCodeLovers/Viblo-Reminder.svg?style=for-the-badge
[stars-url]: https://github.com/AvengersCodeLovers/Viblo-Reminder/stargazers
[issues-shield]: https://img.shields.io/github/issues/AvengersCodeLovers/Viblo-Reminder.svg?style=for-the-badge
[issues-url]: https://github.com/AvengersCodeLovers/Viblo-Reminder/issues
[license-shield]: https://img.shields.io/github/license/AvengersCodeLovers/Viblo-Reminder.svg?style=for-the-badge
[license-url]: https://github.com/AvengersCodeLovers/Viblo-Reminder/blob/main/LICENSE
[github-build]: https://github.com/AvengersCodeLovers/Viblo-Reminder/actions/workflows/lint-prettier.yml/badge.svg
[prettier-style]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge
