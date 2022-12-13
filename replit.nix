{ pkgs }: {
  deps = [
    pkgs.nodejs
    pkgs.sudo
    #pkgs.run
    #pkgs.mailutils
    #pkgs.python39Packages.pippkgs.python39Packages.pip
    pkgs.imagemagick6_light
    pkgs.nodejs-16_x
    pkgs.nodePackages.typescript-language-server
    #pkgs.replitPackages.jest
  ];
}