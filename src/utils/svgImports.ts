const generateIconList = (globResult: Record<string, { default: React.ComponentType<React.SVGProps<SVGSVGElement>> }>) => {
    return Object.keys(globResult).map((iconPath) => {
      const iconName = iconPath.split("/").pop()?.replace(".svg", "")
      const IconComponent = globResult[iconPath].default;
      return { iconName, IconComponent };
    })
  }
  
  const languageIcons = import.meta.glob("../assets/skills/languages/*.svg", { query: "?react", eager: true }) as Record<string, { default: React.ComponentType<React.SVGProps<SVGSVGElement>> }>
  const frontendIcons = import.meta.glob("../assets/skills/frontend/*.svg", { query: "?react", eager: true }) as Record<string, { default: React.ComponentType<React.SVGProps<SVGSVGElement>> }>
  const backendIcons = import.meta.glob("../assets/skills/backend/*.svg", { query: "?react", eager: true }) as Record<string, { default: React.ComponentType<React.SVGProps<SVGSVGElement>> }>
  const databasesIcons = import.meta.glob("../assets/skills/databases/*.svg", { query: "?react", eager: true }) as Record<string, { default: React.ComponentType<React.SVGProps<SVGSVGElement>> }>
  const toolsIcons = import.meta.glob("../assets/skills/tools/*.svg", { query: "?react", eager: true }) as Record<string, { default: React.ComponentType<React.SVGProps<SVGSVGElement>> }>
  
  export const Languages = generateIconList(languageIcons)
  export const Frontend = generateIconList(frontendIcons)
  export const Backend = generateIconList(backendIcons)
  export const Databases = generateIconList(databasesIcons)
  export const Tools = generateIconList(toolsIcons)
  