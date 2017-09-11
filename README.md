# MetaPathExplorer

## Contents 

* [Introduction](https://github.com/meb-team/MetaPathExplorer/blob/master/README.md#introduction)
* [Installation](https://github.com/meb-team/MetaPathExplorer/blob/master/README.md#installation)
* [How to use?](https://github.com/meb-team/MetaPathExplorer/blob/master/README.md#how_to_use)
* [Command line options](https://github.com/meb-team/MetaPathExplorer/blob/master/README.md#command_line_options)
* [INI options](https://github.com/meb-team/MetaPathExplorer/blob/master/README.md#ini_options)
* [Bugs](https://github.com/meb-team/MetaPathExplorer/blob/master/README.md#bugs)
* [Citation](https://github.com/meb-team/MetaPathExplorer/blob/master/README.md#citation)

## Introduction

MetaPathExplorer is a pipeline for analyzing and visualizing KEGG pathway maps (Kanehisa et al., 2002). These pathways are produced from high quality reads or contigs/scaffolds (metagenomes or SCs). 
According to the data (reads or contigs), the pipeline allows:
* a gene prediction _via_ [MetaGeneAnnotator](https://academic.oup.com/dnaresearch/article/15/6/387/512877/MetaGeneAnnotator-Detecting-Species-Specific) or [Prodigal](https://github.com/hyattpd/Prodigal)
* similarity annotation _via_ [DIAMOND](https://github.com/bbuchfink/diamond), [USEARCH](http://www.drive5.com/usearch/) or [blast+](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE_TYPE=BlastDocs&DOC_TYPE=Download)
* visualization of the main results on a HTML based permanent report.

### Optionnal 
MetaPathExplorer allows also optionnal analysis:
* tRNA and tmRNA prediction _via_ [ARAGORN](http://mbio-serv2.mbioekol.lu.se/ARAGORN/)
* rDNA prediction _via_ [rna_hmm]()
* rDNA annotation _via_ [blast+](https://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE_TYPE=BlastDocs&DOC_TYPE=Download)


## Installation 

### Prerequisites

This pipeline is currently using [Perl](https://www.perl.org/) to work.

It also uses [Python 2.7](https://www.python.org/download/releases/2.7/).

### GitHub

Choose somewhere to put it, for example in your home directory (no root access required):

```bash
cd $HOME
```

Clone the latest version of the repository:

```bash
git clone https://github.com/meb-team/MetaPathExplorer.git
```

## How to use? 

### Construct KEGG_Uniref database 

### Launch Analysis 

## Command line options

## INI options 


## Bugs

* Submit problems or requests here: https://github.com/meb-team/MetaPathExplorer/issues


### Citation

# Authors
* Hochart Corentin - [chochart](https://github.com/chochart)

