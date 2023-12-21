import os
import subprocess

class ExportToPDFService:
  _rootFolder = ""
  _fileName = "formato"
  
  def __init__(self, rootFolder):
    self._rootFolder = rootFolder

  def exportFile(self):
    fileOutputPath = os.path.join(self._rootFolder, 'outputs', "{}.xlsx".format(self._fileName))
    subprocess.run(["libreoffice --convert-to pdf {}".format(fileOutputPath)])
    return True